import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

// 处理GitHub Pages重定向
function handleGitHubPagesRedirect() {
  // 适用于GitHub Pages的路由重定向处理
  if (typeof window === 'undefined') return;

  // 获取URL中的redirect参数
  const url = new URL(window.location.href);
  const redirectPath = url.searchParams.get('redirect');
  
  // 如果存在redirect参数，使用History API更新URL
  if (redirectPath) {
    // 删除不需要的查询参数
    url.searchParams.delete('redirect');
    
    // 使用History API替换URL，不刷新页面
    const repoName = 'remix-gh-sandbox';
    const basePath = `/${repoName}`;
    const newPath = redirectPath.startsWith('/') ? redirectPath.substring(1) : redirectPath;
    const newUrl = `${window.location.origin}${basePath}/${newPath}`;
    window.history.replaceState({}, '', newUrl);
  }
}

// 页面加载时执行重定向处理
handleGitHubPagesRedirect();

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
