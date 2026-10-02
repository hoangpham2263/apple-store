# Apple Store

A full-stack online store for Apple products, built with a React frontend and a Node.js / Express / MongoDB REST API.

## Features

**Customer**
- Home page with a banner slider and product listings loaded from the API
- Category pages for iPhone, iPad, Mac, Apple Watch, audio and accessories
- Filtering by product version, sorting and pagination (iPhone and iPad pages)
- Product detail page by slug, with per-color images and color / storage capacity selection
- Live product search in the header (debounced, title match)
- Account registration, login and logout

**Admin**
- Role-based access: product create, update and delete endpoints require a JWT and the `admin` role
- "Add product" form with per-category options (iPhone, iPad, Mac, Watch, audio, accessories) and multi-image upload
- Product images are uploaded to Cloudinary by the API

**API**
- `POST /api/user/register`, `/login`, `/logout`, `PUT /api/user/update`
- `GET /api/product` with query filters (`category`, `version`, price ranges via `gte/gt/lte/lt`), `sort`, `fields`, `page`, `limit`
- `GET /api/product/search?q=`, `GET /api/product/:slug`
- `POST /api/product/create`, `PUT /api/product/update/:id`, `DELETE /api/product/delete/:id` (admin)
- Passwords hashed with bcrypt; refresh token stored in an HTTP cookie

## Tech stack

- **Frontend:** React 18, React Router 6, Redux Toolkit, Axios, Sass (CSS modules), Bootstrap 5, Tailwind CSS, Tippy.js, react-image-gallery (banner sliders), react-toastify, built with Create React App via `react-app-rewired`
- **Backend:** Node.js, Express 4, Mongoose 8 (with `mongoose-slug-updater`), JSON Web Tokens, bcrypt, cookie-parser, Cloudinary SDK, nodemon
- **Database:** MongoDB

## Project structure

```text
apple-store/
├── api/                    Express REST API
│   ├── index.js            App entry point (port 8000, CORS for http://localhost:3000)
│   ├── config/             MongoDB connection and JWT / refresh token helpers
│   ├── controllers/        User and product request handlers
│   ├── middlewares/        Auth (JWT + admin check) and error handlers
│   ├── models/             Mongoose models: User, Product
│   ├── routes/             /api/user and /api/product routers
│   └── utils/              MongoDB ObjectId validation
└── web/                    React frontend
    ├── public/             Static HTML template and manifest
    └── src/
        ├── Pages/          Route pages (Home, product categories, HomeDetail, Login, Register, CreateProduct, ...)
        ├── layout/         HomeLayout, DefaultLayout and shared components (Header, Footer, Search, sliders)
        ├── redux/          Redux store with user and cart slices
        ├── routes/         Route table mapping paths to pages and layouts
        ├── config/         Route path constants
        ├── hooks/          useDebounce
        └── utility/        Image-to-Base64 helpers for uploads
```

## Getting started

### Prerequisites

- Node.js and npm
- A MongoDB instance (local or hosted)
- A Cloudinary account if you want to upload product images

### Environment variables

There is no `.env.example` in this repository. Create the following files yourself:

`api/.env`

```env
MONGODB_URL=mongodb://localhost:27017/apple-store
JWT_SECRET=your-secret
```

`web/.env`

```env
REACT_APP_SERVER_DOMAIN=http://localhost:8000/api
```

The Cloudinary configuration is set in `api/controllers/productController.js`; replace it with your own account credentials.

### Run

Start the API and the web app in two terminals:

```bash
# Terminal 1 - API on http://localhost:8000
cd api
npm install
npm start
```

```bash
# Terminal 2 - web app on http://localhost:3000
cd web
npm install
npm start
```

To create an admin account, register through the web app and then set that user's `role` field to `admin` in MongoDB.

## Author

**Hoang Pham** — [Portfolio](https://hoangpham2263.github.io) · [GitHub](https://github.com/hoangpham2263)
