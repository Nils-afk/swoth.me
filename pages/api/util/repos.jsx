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
