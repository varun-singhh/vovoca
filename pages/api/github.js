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
            const avatarsList = data.map(src => {
                return src.avatar_url
            })

            return res.status(200).json({
                avatars: avatarsList
            })
        })
    } catch (error) {
        console.error(error)
    }
}