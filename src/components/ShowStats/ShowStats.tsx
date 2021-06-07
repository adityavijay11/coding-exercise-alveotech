import React from 'react';
import { statsType } from 'types/logs';
import { Table } from 'semantic-ui-react';
import { severityType } from 'types/logs';
const ShowLog: React.FC<statsType> = ({ infoLength, warningLength, errorLength }) =>
  <>
    <Table.Row className={severityType.info} key={severityType.info}>
      <Table.Cell>INFO:</Table.Cell><Table.Cell>{infoLength}</Table.Cell>
    </Table.Row>
    <Table.Row className={severityType.warning} key={severityType.warning}>
      <Table.Cell>WARNING:</Table.Cell><Table.Cell>{warningLength}</Table.Cell>
    </Table.Row>
    <Table.Row className={severityType.error} key={severityType.error}>
      <Table.Cell>ERROR:</Table.Cell><Table.Cell>{errorLength}</Table.Cell>
    </Table.Row>
  </>

export default ShowLog;