# The Coffee World Api

## Products

Get all products

**ENDPOINT** : `GET` `/api/v1/products`

Get product by id

**ENDPOINT** : `GET` `/api/v1/product/:id`

Create new product

**ENDPOINT** : `POST` `/api/v1/admin/product/new`

Create new products

**ENDPOINT** : `POST` `/api/v1/admin/products/new`

Update product by id

**ENDPOINT** : `PUT` `/api/v1/admin/product/:id`

Delete product by id

**ENDPOINT** : `DELETE` `/api/v1/admin/product/:id`

## Authentication

Register user

**ENDPOINT** : `POST` `/api/v1/register`

Login user

**ENDPOINT** : `POST` `/api/v1/login`

Logout user

**ENDPOINT** : `GET` `/api/v1/logout`

Forgot password

**ENDPOINT** : `POST` `/api/v1/password/forgot`

Reset password

**ENDPOINT** : `Put` `/api/v1/password/reset/:id`

## Users

Get user profile

**ENDPOINT** : `GET` `/api/v1/me`

Update password

**ENDPOINT** : `PUT` `/api/v1/password/update`

Update profile

**ENDPOINT** : `PUT` `/api/v1/me/update`

## Order

Create new order

**ENDPOINT** : `POST` `/api/v1/order/new`

Get single order

**ENDPOINT** : `GET` `/api/v1/order/:id`

Get logged in user orders

**ENDPOINT** : `GET` `/api/v1/order/me`

Get all orders - admin

**ENDPOINT** : `GET` `/api/v1/admin/orders`

Update order - admin

**ENDPOINT** : `PUT` `/api/v1/admin/order/:id`

Delete order - admin

**ENDPOINT** : `DELETE` `/api/v1/admin/order/:id`

## Review

Create/update review

**ENDPOINT** : `PUT` `/api/v1/review`

Get all reviews

**ENDPOINT** : `GET` `/api/v1/review`

**Query Params**

`id=[number]`

Delete review

**ENDPOINT** : `DELETE` `/api/v1/review`

**Query Params**

`productId=[number]`

`id=[number]`