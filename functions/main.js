export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  console.log("Incoming URL:", url.href);

  if (url.pathname.startsWith('/')) {
    // 替换为目标主机名
    url.hostname = 'nodejsweb.g1-us-east.galaxycloud.app';

    // 构造新的请求并保留原请求的 init 信息
    const newRequest = new Request(url.href, request);

    console.log("Proxying to:", url.href);

    return fetch(newRequest);
  }

  // 否则交给默认的静态资源处理
  // return context.env.ASSETS.fetch(request);
  return new Response("Not found", { status: 404 });

}
