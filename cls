[33mcommit d4f8b9e99fdd13fa09c3af773279fac891b0a72c[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m)[m
Author: loganth55 <loganthpranav2005@gmail.com>
Date:   Mon Jun 22 01:26:25 2026 +0530

    Remove duplicate frontend and backend folders

 backend/.gitignore                              |   10 [31m-[m
 backend/model/categorySchema.js                 |   11 [31m-[m
 backend/model/commentSchema.js                  |   13 [31m-[m
 backend/model/messageSchema.js                  |   12 [31m-[m
 backend/model/schema.js                         |   15 [31m-[m
 backend/model/settingsSchema.js                 |   34 [31m-[m
 backend/model/subsriberSchema.js                |    8 [31m-[m
 backend/package-lock.json                       | 1240 [31m---------[m
 backend/package.json                            |   19 [31m-[m
 backend/routes/categoryController.js            |   95 [31m-[m
 backend/routes/commentController.js             |   48 [31m-[m
 backend/routes/data.js                          |   92 [31m-[m
 backend/routes/data.json                        |   17 [31m-[m
 backend/routes/messageController.js             |    3 [31m-[m
 backend/routes/settingsController.js            |   78 [31m-[m
 backend/routes/subscriberController.js          |   45 [31m-[m
 backend/server.js                               |   41 [31m-[m
 backend/uploads/1781772438904-Capture.JPG       |  Bin [31m30351[m -> [32m0[m bytes
 backend/uploads/1781775930061-222.JPG           |  Bin [31m41058[m -> [32m0[m bytes
 backend/uploads/1781926010712-Capture 2222.JPG  |  Bin [31m30221[m -> [32m0[m bytes
 backend/uploads/1781928432964-Capture 2222.JPG  |  Bin [31m30221[m -> [32m0[m bytes
 backend/uploads/1781958127879-Capture.JPG       |  Bin [31m30351[m -> [32m0[m bytes
 backend/uploads/1781958193396-222.JPG           |  Bin [31m41058[m -> [32m0[m bytes
 backend/uploads/upload.js                       |   12 [31m-[m
 frontend/.gitignore                             |   24 [31m-[m
 frontend/README.md                              |   16 [31m-[m
 frontend/eslint.config.js                       |   21 [31m-[m
 frontend/index.html                             |   13 [31m-[m
 frontend/package-lock.json                      | 3252 [31m-----------------------[m
 frontend/package.json                           |   37 [31m-[m
 frontend/src/App.jsx                            |   51 [31m-[m
 frontend/src/assets/hero.png                    |  Bin [31m13057[m -> [32m0[m bytes
 frontend/src/assets/react.svg                   |    1 [31m-[m
 frontend/src/assets/vite.svg                    |    1 [31m-[m
 frontend/src/components/admin/BlogCard.jsx      |    0
 frontend/src/components/admin/DashboardCard.jsx |   71 [31m-[m
 frontend/src/components/admin/Sidebar.jsx       |  138 [31m-[m
 frontend/src/components/admin/StatsCard.jsx     |   13 [31m-[m
 frontend/src/components/user/BlogGrid.jsx       |   55 [31m-[m
 frontend/src/components/user/FeaturedPost.jsx   |   43 [31m-[m
 frontend/src/components/user/Footer.jsx         |   99 [31m-[m
 frontend/src/components/user/Hero.jsx           |   19 [31m-[m
 frontend/src/components/user/Navbar.jsx         |  111 [31m-[m
 frontend/src/components/user/NewsLetter.jsx     |   32 [31m-[m
 frontend/src/components/user/Pagination.jsx     |    0
 frontend/src/data/categories.js                 |   27 [31m-[m
 frontend/src/index.css                          |    4 [31m-[m
 frontend/src/layouts/AdminLayout.jsx            |   13 [31m-[m
 frontend/src/layouts/UserLayout.jsx             |   15 [31m-[m
 frontend/src/main.jsx                           |   12 [31m-[m
 frontend/src/pages/admin/AdminBlogDetails.jsx   |  141 [31m-[m
 frontend/src/pages/admin/AdminCategory.jsx      |  282 [31m--[m
 frontend/src/pages/admin/AdminComments.jsx      |  107 [31m-[m
 frontend/src/pages/admin/AdminMessages.jsx      |    0
 frontend/src/pages/admin/AdminSettings.jsx      |  184 [31m--[m
 frontend/src/pages/admin/AdminSubscriber.jsx    |   99 [31m-[m
 frontend/src/pages/admin/CreateBlog.jsx         |  185 [31m--[m
 frontend/src/pages/admin/Dashboard.jsx          |  128 [31m-[m
 frontend/src/pages/admin/EditBlog.jsx           |  172 [31m--[m
 frontend/src/pages/admin/Posts.jsx              |  113 [31m-[m
 frontend/src/pages/user/BlogContent.jsx         |    0
 frontend/src/pages/user/BlogDetails.jsx         |  153 [31m--[m
 frontend/src/pages/user/Blogs.jsx               |  307 [31m---[m
 frontend/src/pages/user/Category.jsx            |   81 [31m-[m
 frontend/src/pages/user/CategoryBlogs.jsx       |  114 [31m-[m
 frontend/src/pages/user/Home.jsx                |   36 [31m-[m
 frontend/src/services/blogApi.js                |   32 [31m-[m
 frontend/src/services/categoryApi.js            |   32 [31m-[m
 frontend/src/services/commentApi.js             |   19 [31m-[m
 frontend/src/services/messageApi.js             |    0
 frontend/src/services/settingsApi.js            |   27 [31m-[m
 frontend/src/services/subscriberApi.js          |   18 [31m-[m
 frontend/vite.config.js                         |    7 [31m-[m
 73 files changed, 8098 deletions(-)
