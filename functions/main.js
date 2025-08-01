export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // 修改目标主机
  url.hostname = 'even2.cist.pp.ua';

  // 克隆原始请求并替换 URL
  const newRequest = new Request(url.toString(), request);

  // 打印日志（仅在本地 dev 模式有效）
  console.log('Original URL:', request.url);
  console.log('Proxied URL:', url.toString());

  // 执行代理请求
  return fetch(newRequest);
}
