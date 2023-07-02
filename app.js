// const fs = require('fs');
// const path = require('path');
// const { getFilesizeInBytes } = require('./logic');

import path from 'path';
import fs from 'fs';
import { copyFiles, getFilesizeInBytes, makeFolderByFileSize, moveFiles } from './logic.js';
import { folderPathByFileSize } from './pathDeclaration.js';

// 1. cli로부터 경로 가져오기
console.time('보자보자 얼마나 걸린가');
const fileLocation = process.argv[2];
const resultLocation = process.argv[3];

// 2. 사진 가져오기

fs.promises.readdir(fileLocation).then(processFiles);

function processFiles(files) {
  if (files.length < 1) return;

  files.forEach((file) => {
    handleFile(file);
  });
}

// 3. 모든 사진 분류하기

async function handleFile(fileName) {
  const fileSize = getFilesizeInBytes(fileLocation, fileName);

  // 파일 사이즈에 폴더있나 없나 확인 있으면 만들고 없으면 넘김

  if (fs.existsSync(folderPathByFileSize(resultLocation, fileSize))) {
    // 있음
  } else {
    // 없음

    makeFolderByFileSize(resultLocation, fileSize);
  }

  // 만들어진 폴더에 투입, 폴더안에 같은 이름의 파일이 있을 경우 스킵
  await copyFiles(fileName, fileLocation, folderPathByFileSize(resultLocation, fileSize));
}

console.timeEnd('보자보자 얼마나 걸린가');
