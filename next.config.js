const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config with your production environment data
    return {
      reactStrictMode: true,
      env: {
        mongo_db_username: 'NextJSCourse',
        mongo_db_password: '123mudar',
        mongo_db_clustername: 'nextjscourse',
        mongo_db_database: 'blog-production',
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongo_db_username: 'NextJSCourse',
      mongo_db_password: '123mudar',
      mongo_db_clustername: 'nextjscourse',
      mongo_db_database: 'blog-dev',
    }
  }
}
