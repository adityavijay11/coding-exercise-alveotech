import React, { useState, useEffect } from 'react';
import { logType, severityType } from 'types/logs';
import fetchLogs from 'services/fetchLogs';
import ShowLog from 'components/ShowLog';
import ShowStats from 'components/ShowStats';
import { Container, Table } from 'semantic-ui-react';
import './logsstyle.scss';

const Logs = () => {
  const [logs, setLogs] = useState<logType[]>([])

  useEffect(() => {
    (async () => {
      const logs = await fetchLogs();
      setLogs(logs);
    })();
  }, []);

  const info = logs.filter(({ severity }) => severity === severityType.info);
  const warning = logs.filter(({ severity }) => severity === severityType.warning);
  const error = logs.filter(({ severity }) => severity === severityType.error);

  return logs.length > 0 ? (
    <Container className="logsContainer">
      <Container className="logsTable">
        <Table celled selectable className="logs" style={{ fontSize: 16 }}>
          <Table.Body>
            {
              logs.map((log) => <ShowLog {...log} key={log.datetime} />)
            }
          </Table.Body>
        </Table>
      </Container>
      <Table celled selectable className="stats" style={{ fontSize: 16 }}>
        <Table.Body>
          <ShowStats
            infoLength={info.length}
            warningLength={warning.length}
            errorLength={error.length}
          />
        </Table.Body>
      </Table>
    </Container>
  ) : null;
}

export default Logs;