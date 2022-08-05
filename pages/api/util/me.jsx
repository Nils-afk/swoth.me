import axios from 'axios';

export default async function Repos(req, res) {
    let linkcord = await axios.get('https://linkcord.js.org/api/v3/user/776757761701838858').catch(() => {});
    res.json((linkcord && linkcord.data) ? linkcord.data.data || {} : {});
};
