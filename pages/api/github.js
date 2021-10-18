const { Octokit } = require("@octokit/rest")

export default async (req, res) => {
    try {
        const octokit = new Octokit({
            baseUrl: 'https://api.github.com'
        });

        octokit.rest.repos.listContributors({
            owner: "varun-singhh",
            repo: "vovoca",
        })
        .then(({ data }) => {
            const usersList = data.map(src => {
                return { avatar_url: src.avatar_url, url: src.html_url }
            })

            return res.status(200).json({
                users: usersList
            })
        })
    } catch (error) {
        console.error(error)
    }
}