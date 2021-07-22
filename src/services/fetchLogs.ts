import { logType } from 'types/logs';

const fetchLogs = async (callIndex: number): Promise<logType[]> => {
  const response = await fetch('/api/logs.json');
  if (!response.ok) {
    throw new Error('Error fetching logs.');
  }
  const logs = await response.json();
  /*
  //playing with promise
  const logs: any = await fetch('/api/logs.json').then((res) => res.json()).then((res) => new Promise((re) => {
    setTimeout(() => re(res), 3000)
  })).then((res) => res);*/
  return logs.slice(0, callIndex);
}

export default fetchLogs;