var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/quabey/StundenPlaner.git', // Update to point to your repository  
        user: {
            name: 'quabey', // update to use your name
            email: 'quadrobtv@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)