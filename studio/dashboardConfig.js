export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '632da7abb1a93303ed3b3554',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-demo-studio-aba1ergi',
                  apiId: '785667cb-7cca-4a50-a1c7-a5f45a97dca1'
                },
                {
                  buildHookId: '632da7ab08aa9d07c857df5c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-demo-web-gj9sbyc8',
                  apiId: 'd4453316-8c1a-4934-ac1e-d052264c1ec8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kgry/sanity-gatsby-demo',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-demo-web-gj9sbyc8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
