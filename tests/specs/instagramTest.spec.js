const HomePage = require('../pageobjects/home.page')

describe('Test Instagram', () => {
    it('Click menu search', async () => {
        await HomePage.clickSearchUser();
    });

    it('Search by username', async () => {
        await HomePage.inputusername('selenagomez');
    });

    it('Follow user', async () => {
        await HomePage.clickFollowhUser();
        const verifyFollowing = await HomePage.getFollowingText()
        await expect(verifyFollowing).toContain("Following")
    });

    it('Send message', async () => {
        await HomePage.sendMessage('Hello you are so beautiful');
    });
    
});