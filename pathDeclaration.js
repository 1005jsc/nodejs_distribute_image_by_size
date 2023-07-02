import path from 'path';

// 용량별 폴더 경로

export const folderPathByFileSize = (resultLocation, fileSize) => {
  return path.join(resultLocation, `${fileSize}MB`);
};
