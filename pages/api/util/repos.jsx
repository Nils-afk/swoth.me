import fetch from 'isomorphic-unfetch';

export default async function Repos(req, res) {
    res.json(
        await (await fetch('https://api.github.com/users/swothh/repos', {
            headers: {
                'Authorization': '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'
            } // get token: https://github.com/settings/tokens
        })).json()
    );
};
