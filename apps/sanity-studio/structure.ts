import type { StructureResolver } from 'sanity/structure'

// Custom desk structure for better organization
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Settings (singleton)
      S.listItem()
        .title('⚙️ Site Settings')
        .child(
          S.document()
            .schemaType('globalSettings')
            .documentId('globalSettings')
        ),
      S.divider(),

      // Pages
      S.listItem()
        .title('📄 Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),

      // Blog
      S.listItem()
        .title('📝 Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Posts')
                .schemaType('blogPost')
                .child(S.documentTypeList('blogPost').title('Blog Posts')),
              S.listItem()
                .title('Categories')
                .schemaType('category')
                .child(S.documentTypeList('category').title('Categories')),
            ])
        ),

      S.divider(),

      // Medical Practice Content
      S.listItem()
        .title('🏥 Services')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Services')),

      S.listItem()
        .title('👨‍⚕️ Team / Doctors')
        .schemaType('doctor')
        .child(S.documentTypeList('doctor').title('Team Members')),

      S.listItem()
        .title('📍 Locations')
        .schemaType('location')
        .child(S.documentTypeList('location').title('Locations')),
    ])
