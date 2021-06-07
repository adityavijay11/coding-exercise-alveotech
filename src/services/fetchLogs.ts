import { logType } from 'types/logs';

const fetchLogs = async (callIndex: number): Promise<logType[]> => {
  const response = await fetch('/api/logs.json');
  if (!response.ok) {
    throw new Error('Error fetching logs.');
  }
  const logs = await response.json();
  return logs.slice(0, callIndex);
}

export default fetchLogs;