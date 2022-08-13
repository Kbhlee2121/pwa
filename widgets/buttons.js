
const matchAll = async () => {
  console.log('Pushing matchAll request to SW');
  const sw = await navigator.serviceWorker.getRegistration();
  sw.active.postMessage('matchAll');
};

const getByTag = async () => {
  console.log('Pushing getByTag request to SW');

  const tag = document.getElementById('getByTagInput').value;
  const sw = await navigator.serviceWorker.getRegistration();
  sw.active.postMessage(`getByTag;${tag}`);
};

const getByInstanceId = async () => {
  console.log('Pushing getByInstanceId request to SW');

  const instanceId = document.getElementById('getByInstanceIdInput').value;
  const sw = await navigator.serviceWorker.getRegistration();
  sw.active.postMessage(`getByInstanceId;${instanceId}`);
};

const updateByTag = async () => {
  console.log('Pushing updateByTag request to SW');

  const tag = document.getElementById('updateByTagInput').value;
  const sw = await navigator.serviceWorker.getRegistration();
  sw.active.postMessage(`updateByTag;${tag}`);
};

const updateByInstanceId = async () => {
  console.log('Pushing updateByInstanceId request to SW');

  const instanceId = document.getElementById('updateByInstanceIdInput').value;
  const sw = await navigator.serviceWorker.getRegistration();
  sw.active.postMessage(`updateByInstanceId;${instanceId}`);
};

const onInputKeydown = (event, action) => {
  if (event.key == 'Enter')
    action(event.target.value);
}

document.getElementById('getByTagInput').addEventListener('keydown', (event) => {
    onInputKeydown(event, getByTag)});
document.getElementById('getByInstanceIdInput').addEventListener('keydown', (event) => {
    onInputKeydown(event, getByInstanceId)});
document.getElementById('updateByTagInput').addEventListener('keydown', (event) => {
    onInputKeydown(event, updateByTag)});
document.getElementById('updateByInstanceIdInput').addEventListener('keydown', (event) => {
      onInputKeydown(event, updateByInstanceId)});