// 本機路徑脫敏:錯誤輸出/日誌給使用者前抹掉絕對路徑(單一實現;此前 5 個檔案各持副本,
// render CLI 的副本漏了 /tmp,在 Linux CI 上把臨時目錄原樣洩漏進錯誤訊息)。
export function scrubLocalPaths(value) {
  return String(value || '')
    .replace(/file:\/\/\/?[^\s"'`<>),;]*/gi, '<local-path>')
    .replace(/\/(?:private\/)?var\/[^\s"'`<>),;\r\n]+(?:\/[^/\\"'`<>),;\r\n]+)*/g, '<local-path>')
    .replace(/\/tmp\/[^/\\"'`<>),;\r\n]+(?:\/[^/\\"'`<>),;\r\n]+)*/g, '<local-path>')
    .replace(/\/Users\/[^/\\"'`<>),;\r\n]+(?:\/[^/\\"'`<>),;\r\n]+)*/g, '<local-path>')
    .replace(/\/Volumes\/[^/\\"'`<>),;\r\n]+(?:\/[^/\\"'`<>),;\r\n]+)*/g, '<local-path>')
    .replace(/\/home\/[^/\\"'`<>),;\r\n]+(?:\/[^/\\"'`<>),;\r\n]+)*/g, '<local-path>')
    .replace(/(?<![A-Za-z])[A-Za-z]:[\\/][^\s"'`<>),;]+(?:[\\/][^\s"'`<>),;]+)*/g, '<local-path>');
}
