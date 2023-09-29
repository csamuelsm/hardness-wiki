import { NextResponse } from 'next/server';

const { Octokit, App } = require('octokit');

const octokit = new Octokit({
    auth: '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' // change it later
})

export const  GET = async () => {
  let search = await octokit.request('GET /search/issues', {
    q: 'is:issue repo:csamuelsm/meu-blog',
    sort:'interactions',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return NextResponse.json(search);
};
