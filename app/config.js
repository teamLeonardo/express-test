module.exports = {
    HOST: "aws-0-us-west-1.pooler.supabase.com",
    USER: "postgres.yldoxpihzekotgmgqlrv",
    PASSWORD: "BV9dpkX2FCA2eY5K",
    DB: "postgres",
    dialect: "postgres",
    port: 5432,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
