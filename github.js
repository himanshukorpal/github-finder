class GitHub {
    constructor() {
        this.client_id='b39ed29efa7e0e56f0d6';
        this.client_secret= '6afc4ebe8e74f22f0d628fa476eeda5f8965da7c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
        

        // const profileData = await profileResponse.json();
        const profile = await profileResponse.json();
        const repos  = await reposResponse.json();
        return {
            // profile : profileData
            profile,
            repos
        }
    }
}
