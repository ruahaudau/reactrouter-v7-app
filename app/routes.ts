import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index('./routes/home.tsx'),
    route('/app', './routes/app.tsx',[
        index('./routes/app/_index.tsx'),
        route('pantry', './routes/app/pantry.tsx')
    ]),
    route('/discover', './routes/discover.tsx'),
    route('/settings', './routes/settings.tsx',[
        route('profile', './routes/settings/profile.tsx'),
        route('app1', './routes/settings/app1.tsx')

    ])
] satisfies RouteConfig;
