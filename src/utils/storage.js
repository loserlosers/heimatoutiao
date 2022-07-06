// 获取数据
export const getLocal = (key) => {
  let data = localStorage.getItem(key);
  try {
    data = JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
  return data;
};

// 存储数据
export function setLocal(key, data) {
  // 判断data是不是object，如果是object就执行JSON.stringify,否则直接写入
  localStorage.setItem(
    key,
    typeof data === "object" ? JSON.stringify(data) : data
  );
}
