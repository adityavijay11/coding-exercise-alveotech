import React, { memo } from 'react';
import { logType } from 'types/logs';
import { Table } from 'semantic-ui-react';
const ShowLog: React.FC<logType> = ({ datetime, severity, message }) =>
  <Table.Row className={severity}>
    <Table.Cell>{datetime}</Table.Cell>
    <Table.Cell>{severity}</Table.Cell>
    <Table.Cell>{message}</Table.Cell>
  </Table.Row>

export default memo(ShowLog);