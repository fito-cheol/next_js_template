import customAxios from 'modules/api/customAxios';

interface bookInfo {
  title: string;
  description: string;
}

export async function getJson() {
  const response = await customAxios.get<bookInfo>('/sample/json');
  return response.data;
}
