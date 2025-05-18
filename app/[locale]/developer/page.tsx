import Image from "next/image"

const profile = {
    "login": "xarielah",
    "id": 84734223,
    "node_id": "MDQ6VXNlcjg0NzM0MjIz",
    "avatar_url": "https://avatars.githubusercontent.com/u/84734223?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/xarielah",
    "html_url": "https://github.com/xarielah",
    "followers_url": "https://api.github.com/users/xarielah/followers",
    "following_url": "https://api.github.com/users/xarielah/following{/other_user}",
    "gists_url": "https://api.github.com/users/xarielah/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/xarielah/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/xarielah/subscriptions",
    "organizations_url": "https://api.github.com/users/xarielah/orgs",
    "repos_url": "https://api.github.com/users/xarielah/repos",
    "events_url": "https://api.github.com/users/xarielah/events{/privacy}",
    "received_events_url": "https://api.github.com/users/xarielah/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Ariel Aharon",
    "company": null,
    "blog": "https://n1fty.dev",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Dev who likes Deving",
    "twitter_username": null,
    "public_repos": 76,
    "public_gists": 0,
    "followers": 4,
    "following": 6,
    "created_at": "2021-05-24T16:58:26Z",
    "updated_at": "2025-05-10T14:00:29Z"
}

export default function DeveloperPage() {
    return (
        <section className="grid">
            <div className="flex gap-4" dir="ltr">
                <div>
                    <a href={profile.html_url} target="_blank" rel="noreferrer">
                        <Image src={profile.avatar_url} alt={profile.login} width={100} height={100} className="rounded-xl" />
                    </a>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-bold text-xl">
                        <a href={profile.html_url} target="_blank" rel="noreferrer">
                            {profile.login}
                        </a>
                    </h1>
                    <p>
                        <span>{profile.bio}</span>
                        <span className="text-gray-400">
                            <span className="mx-2">@</span>
                            <a href={profile.blog} target="_blank" rel="noreferrer">{profile.blog}</a>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}