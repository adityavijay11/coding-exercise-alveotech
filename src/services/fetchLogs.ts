import { logType } from 'types/logs';

const fetchLogs = async (): Promise<logType[]> => {
  const response = await fetch('/api/logs.json');
  if (!response.ok) {
    throw new Error('Error fetching logs.');
  }
  return await response.json();
}

export default fetchLogs;