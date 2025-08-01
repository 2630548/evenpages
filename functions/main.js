export async function onRequest(context) {
  const { request } = context;
  const incomingUrl = new URL(request.url);

  // 构造目标 URL（只修改 hostname，保留路径、查询参数等）
  const targetUrl = new URL(request.url);
  targetUrl.hostname = 'even2.cist.pp.ua';

  console.log("Proxying to:", targetUrl.href);

  // 创建新的请求
  const newRequest = new Request(targetUrl.href, request);

  // 发起代理请求
  return fetch(newRequest);
}
