// 
export function viewTransition(params) {
  if (!document.startViewTransition) {
    params.updateDOMState();
    return;
  } else {
    document.startViewTransition(params.updateDOMState);
  }
}