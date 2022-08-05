import fetch from 'isomorphic-unfetch';

export default async function Repos(req, res) {
    res.json(
        await (await fetch('https://api.github.com/users/nils-afk/repos', {
            headers: {
                'Authorization': 'token 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'
            } // get token: https://github.com/settings/tokens
        })).json()
    );
};
