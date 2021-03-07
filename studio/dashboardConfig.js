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
                  buildHookId: '60452ab75caa1403c298230e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fx52q1rp',
                  apiId: 'ba2a0318-6e77-4b2c-8cd0-14bf2f4897bc'
                },
                {
                  buildHookId: '60452ab7f32a8d352c68523b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7gwj8jty',
                  apiId: '024a07ee-8c48-46cb-9839-bce03f59f749'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leandesign/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7gwj8jty.netlify.app',
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
