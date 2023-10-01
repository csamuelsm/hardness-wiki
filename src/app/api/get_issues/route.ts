import { NextResponse } from 'next/server';

const { Octokit, App } = require('octokit');

const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN
})

export const  GET = async () => {
  let search = await octokit.request('GET /search/issues', {
    q: 'is:issue repo:csamuelsm/hardness-wiki',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return NextResponse.json(search);
};
