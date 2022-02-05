module.exports = {
  apps: [
    {
      name: 'server',
      cwd: '/home/yooneskh/server',
      script: 'deno',
      args: 'run --unstable --allow-net --allow-read=./ --allow-write=./ bootstrap.ts',
      autorestart: true
    },
  ]
};
