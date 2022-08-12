import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then(m => m.SplashScreenPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'my-setting',
    loadChildren: () => import('./pages/my-setting/my-setting.module').then( m => m.MySettingPageModule)
  },
  {
    path: 'personal-info-edit',
    loadChildren: () => import('./modals/personal-info-edit/personal-info-edit.module').then( m => m.PersonalInfoEditPageModule)
  },
  {
    path: 'password-change',
    loadChildren: () => import('./modals/password-change/password-change.module').then( m => m.PasswordChangePageModule)
  },
  {
    path: 'promotion-notification-change',
    loadChildren: () => import('./modals/promotion-notification-change/promotion-notification-change.module').then( m => m.PromotionNotificationChangePageModule)
  },
  {
    path: 'my-order',
    loadChildren: () => import('./pages/my-order/my-order.module').then( m => m.MyOrderPageModule)
  },
  {
    path: 'homepage',
      loadChildren: () => import('./pages/buyer/home/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/buyer/home/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'chatroom',
    loadChildren: () => import('./pages/buyer/chatroom/chatroom.module').then( m => m.ChatroomPageModule)
  },
  {
    path: 'chatroom-page-two',
    loadChildren: () => import('./pages/buyer/chatroom-page-two/chatroom-page-two.module').then( m => m.ChatroomPageTwoPageModule)
  },
  // {
  //   path: 'chatroom-page-three',
  //   loadChildren: () => import('./pages/buyer/chatroom-page-three/chatroom-page-three.module').then( m => m.ChatroomPageThreePageModule)
  // },
  {
    path: 'my-order',
    loadChildren: () => import('./pages/my-order/my-order.module').then( m => m.MyOrderPageModule)
  },
  {
    path: 'order-rating',
    loadChildren: () => import('./modals/order-rating/order-rating.module').then( m => m.OrderRatingPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'profile-payment',
    loadChildren: () => import('./pages/profile-payment/profile-payment.module').then( m => m.ProfilePaymentPageModule)
  },
  {
    path: 'coupon-saved',
    loadChildren: () => import('./pages/profile-coupon/profile-coupon.module').then( m => m.ProfileCouponPageModule)
  },
  {
    path: 'mylike',
    loadChildren: () => import('./pages/profile-favorite/profile-favorite.module').then( m => m.ProfileFavoritePageModule)
  },
  {
    path: 'myshop',
    loadChildren: () => import('./pages/profile-store/profile-store.module').then( m => m.ProfileStorePageModule)
  },
  {
    path: 'mypost',
    loadChildren: () => import('./pages/profile-post/profile-post.module').then( m => m.ProfilePostPageModule)
  },
  {
    path: 'card-info-edit',
    loadChildren: () => import('./modals/card-info-edit/card-info-edit.module').then( m => m.CardInfoEditPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./pages/buyer/forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./pages/buyer/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  {
    path: 'shopping-cart-payment',
    loadChildren: () => import('./pages/buyer/shopping-cart-payment/shopping-cart-payment.module').then( m => m.ShoppingCartPaymentPageModule)
  },
  {
    path: 'recipient-info-edit',
    loadChildren: () => import('./modals/recipient-info-edit/recipient-info-edit.module').then( m => m.RecipientInfoEditPageModule)
  },
  {
    path: 'product-category',
    loadChildren: () => import('./pages/seller/add-product/product-category/product-category.module').then( m => m.ProductCategoryPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./pages/seller/add-product/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-description',
    loadChildren: () => import('./pages/seller/add-product/product-description/product-description.module').then( m => m.ProductDescriptionPageModule)
  },
  {
    path: 'add-product-delivery',
    loadChildren: () => import('./pages/seller/add-product/add-product-delivery/add-product-delivery.module').then( m => m.AddProductDeliveryPageModule)
  },
  {
    path: 'upload-photo',
    loadChildren: () => import('./pages/seller/add-product/upload-photo/upload-photo.module').then( m => m.UploadPhotoPageModule)
  },
  {
    path: 'finish-add-product',
    loadChildren: () => import('./pages/seller/add-product/finish-add-product/finish-add-product.module').then( m => m.FinishAddProductPageModule)
  },
  {
    path: 'homepage-new',
    loadChildren: () => import('./pages/buyer/home/homepage-new/homepage-new.module').then( m => m.HomepageNewPageModule)
  },
  {
    path: 'notifications-news-detail',
    loadChildren: () => import('./pages/buyer/home/notifications-news-detail/notifications-news-detail.module').then( m => m.NotificationsNewsDetailPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./modals/payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  { path: 'seller/homepage',
    loadChildren: () => import('./pages/seller/home/homepage-new/homepage-new.module').then( m => m.HomepageNewPageModule)
  },
  {
    path: 'seller/store-introduction',
    loadChildren: () => import('./pages/seller/store-introduction/store-introduction.module').then( m => m.StoreIntroductionPageModule)
  },
  {
    path: 'seller/shipping',
    loadChildren: () => import('./pages/seller/shipping/shipping.module').then( m => m.ShippingPageModule)
  },
  {
    path: 'seller/terms',
    loadChildren: () => import('./pages/seller/terms/terms.module').then( m => m.TermsPageModule)
  },
  // {
  //   path: 'seller/merchant-list',
  //   loadChildren: () => import('./pages/seller/merchant-list/merchant-list.module').then( m => m.MerchantListPageModule)
  // },
  {
    path: 'transaction-record',
    loadChildren: () => import('./pages/transaction-record/transaction-record.module').then( m => m.TransactionRecordPageModule)
  },
  {
    path: 'transaction-record-filter',
    loadChildren: () => import('./modals/transaction-record-filter/transaction-record-filter.module').then( m => m.TransactionRecordFilterPageModule)
  },
  // {
  //   path: 'transaction-record/sales-performance',
  //   loadChildren: () => import('./pages/seller/transaction-record/sales-performance/sales-performance.module').then( m => m.SalesPerformancePageModule)
  // },
  {
    path: 'transaction-record/sales-performance/sales-performance-filter',
    loadChildren: () => import('./modals/sales-performance-filter/sales-performance-filter.module').then( m => m.SalesPerformanceFilterPageModule)
  },
  // {
  //   path: 'transaction-record/product-visit-rate',
  //   loadChildren: () => import('./pages/seller/transaction-record/product-visit-rate/product-visit-rate.module').then( m => m.ProductVisitRatePageModule)
  // },
  {
    path: 'transaction-record/product-visit-rate/product-visit-rate-filter',
    loadChildren: () => import('./modals/product-visit-rate-filter/product-visit-rate-filter.module').then( m => m.ProductVisitRateFilterPageModule)
  },
  // {
  //   path: 'transaction-record/period-visit-rate',
  //   loadChildren: () => import('./pages/seller/transaction-record/period-visit-rate/period-visit-rate.module').then( m => m.PeriodVisitRatePageModule)
  // },
  {
    path: 'search-page',
    loadChildren: () => import('./pages/buyer/home/search-page/search-page.module').then( m => m.SearchPagePageModule)
  },
  // {
  //   path: 'chatroom-page-three',
  //   loadChildren: () => import('./pages/buyer/chatroom-page-three/chatroom-page-three.module').then( m => m.ChatroomPageThreePageModule)
  // },
  {
    path: 'my-order',
    loadChildren: () => import('./pages/my-order/my-order.module').then( m => m.MyOrderPageModule)
  },
  {
    path: 'order-rating',
    loadChildren: () => import('./modals/order-rating/order-rating.module').then( m => m.OrderRatingPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'profile-payment',
    loadChildren: () => import('./pages/profile-payment/profile-payment.module').then( m => m.ProfilePaymentPageModule)
  },
  {
    path: 'mylike',
    loadChildren: () => import('./pages/profile-favorite/profile-favorite.module').then( m => m.ProfileFavoritePageModule)
  },
  {
    path: 'myshop',
    loadChildren: () => import('./pages/profile-store/profile-store.module').then( m => m.ProfileStorePageModule)
  },
  {
    path: 'mypost',
    loadChildren: () => import('./pages/profile-post/profile-post.module').then( m => m.ProfilePostPageModule)
  },
  {
    path: 'card-info-edit',
    loadChildren: () => import('./modals/card-info-edit/card-info-edit.module').then( m => m.CardInfoEditPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./pages/buyer/forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./pages/buyer/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  {
    path: 'shopping-cart-payment',
    loadChildren: () => import('./pages/buyer/shopping-cart-payment/shopping-cart-payment.module').then( m => m.ShoppingCartPaymentPageModule)
  },
  {
    path: 'recipient-info-edit',
    loadChildren: () => import('./modals/recipient-info-edit/recipient-info-edit.module').then( m => m.RecipientInfoEditPageModule)
  },
  {
    path: 'product-category',
    loadChildren: () => import('./pages/seller/add-product/product-category/product-category.module').then( m => m.ProductCategoryPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./pages/seller/add-product/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-description',
    loadChildren: () => import('./pages/seller/add-product/product-description/product-description.module').then( m => m.ProductDescriptionPageModule)
  },
  {
    path: 'add-product-delivery',
    loadChildren: () => import('./pages/seller/add-product/add-product-delivery/add-product-delivery.module').then( m => m.AddProductDeliveryPageModule)
  },
  {
    path: 'upload-photo',
    loadChildren: () => import('./pages/seller/add-product/upload-photo/upload-photo.module').then( m => m.UploadPhotoPageModule)
  },
  {
    path: 'upload-photo-filter',
    loadChildren: () => import('./modals/upload-photo-filter/upload-photo-filter.module').then( m => m.UploadPhotoFilterPageModule)
  },
  {
    path: 'upload-video-filter',
    loadChildren: () => import('./modals/upload-video-filter/upload-video-filter.module').then( m => m.UploadVideoFilterPageModule)
  },
  {
    path: 'finish-add-product',
    loadChildren: () => import('./pages/seller/add-product/finish-add-product/finish-add-product.module').then( m => m.FinishAddProductPageModule)
  },
  {
    path: 'homepage-new',
    loadChildren: () => import('./pages/buyer/home/homepage-new/homepage-new.module').then( m => m.HomepageNewPageModule)
  },
  {
    path: 'notifications-news-detail',
    loadChildren: () => import('./pages/buyer/home/notifications-news-detail/notifications-news-detail.module').then( m => m.NotificationsNewsDetailPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./modals/payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  { path: 'seller/homepage',
    loadChildren: () => import('./pages/seller/home/homepage-new/homepage-new.module').then( m => m.HomepageNewPageModule)
  },
  {
    path: 'seller/store-introduction',
    loadChildren: () => import('./pages/seller/store-introduction/store-introduction.module').then( m => m.StoreIntroductionPageModule)
  },
  {
    path: 'seller/shipping',
    loadChildren: () => import('./pages/seller/shipping/shipping.module').then( m => m.ShippingPageModule)
  },
  {
    path: 'seller/terms',
    loadChildren: () => import('./pages/seller/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'seller/coupon',
    loadChildren: () => import('./pages/seller/coupon/coupon.module').then( m => m.CouponPageModule)
  },
  {
    path: 'seller/staff',
    loadChildren: () => import('./pages/seller/staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'store-introduction-edit',
    loadChildren: () => import('./modals/store-introduction-edit/store-introduction-edit.module').then( m => m.StoreIntroductionEditPageModule)
  },
  {
    path: 'shipping-edit',
    loadChildren: () => import('./modals/shipping-edit/shipping-edit.module').then( m => m.ShippingEditPageModule)
  },
  {
    path: 'terms-edit',
    loadChildren: () => import('./modals/terms-edit/terms-edit.module').then( m => m.TermsEditPageModule)
  },
  {
    path: 'coupon-edit',
    loadChildren: () => import('./modals/coupon-edit/coupon-edit.module').then( m => m.CouponEditPageModule)
  },
  {
    path: 'coupon-add',
    loadChildren: () => import('./modals/coupon-add/coupon-add.module').then( m => m.CouponAddPageModule)
  },
  {
    path: 'seller/profile',
    loadChildren: () => import('./pages/seller/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'seller/forum',
    loadChildren: () => import('./pages/seller/forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'seller/chatroom',
    loadChildren: () => import('./pages/seller/chatroom/chatroom.module').then( m => m.ChatroomPageModule)
  },
  {
    path: 'chat-room-setting',
    loadChildren: () => import('./modals/chat-room-setting/chat-room-setting.module').then( m => m.ChatRoomSettingPageModule)
  },
  {
    path: 'update-store-information',
    loadChildren: () => import('./modals/update-store-information/update-store-information.module').then( m => m.UpdateStoreInformationPageModule)
  },
  {
    path: 'product-category-setting',
    loadChildren: () => import('./modals/product-category-setting/product-category-setting.module').then( m => m.ProductCategorySettingPageModule)
  },
  {
    path: 'seller/setting',
    loadChildren: () => import('./pages/seller/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'ipygg/shop-homepage',
    loadChildren: () => import('./pages/buyer/shop/ipygg-shop/shop-homepage/shop-homepage.module').then( m => m.ShopHomepagePageModule)
  },
  {
    path: 'ipygg/shop-category',
    loadChildren: () => import('./pages/buyer/shop/ipygg-shop/shop-category/shop-category.module').then( m => m.ShopCategoryPageModule)
  },
  {
    path: 'ipygg/shop-category-two',
    loadChildren: () => import('./pages/buyer/shop/ipygg-shop/shop-category-two/shop-category-two.module').then( m => m.ShopCategoryTwoPageModule)
  },
  {
    path: 'shop/store-introduction',
    loadChildren: () => import('./pages/buyer/shop/store-introduction/store-introduction.module').then( m => m.StoreIntroductionPageModule)
  },
  {
    path: 'shop/shipping-method',
    loadChildren: () => import('./pages/buyer/shop/shipping-method/shipping-method.module').then( m => m.ShippingMethodPageModule)
  },
  {
    path: 'shop/terms-condition',
    loadChildren: () => import('./pages/buyer/shop/terms-condition/terms-condition.module').then( m => m.TermsConditionPageModule)
  },
  {
    path: 'ipygg/shop-category-fish',
    loadChildren: () => import('./pages/buyer/shop/ipygg-shop/shop-category-fish/shop-category-fish.module').then( m => m.ShopCategoryFishPageModule)
  },
  {
    path: 'ipygg/shop-category-bird',
    loadChildren: () => import('./pages/buyer/shop/ipygg-shop/shop-category-bird/shop-category-bird.module').then( m => m.ShopCategoryBirdPageModule)
  },
  {
    path: 'ipygg/shop-category-flower',
    loadChildren: () => import('./pages/buyer/shop/ipygg-shop/shop-category-flower/shop-category-flower.module').then( m => m.ShopCategoryFlowerPageModule)
  },
  {
    path: 'ipygg/shop-category-insect',
    loadChildren: () => import('./pages/buyer/shop/ipygg-shop/shop-category-insect/shop-category-insect.module').then( m => m.ShopCategoryInsectPageModule)
  },
  { path: 'seller/product',
    loadChildren: () => import('./pages/seller/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'seller/item',
    loadChildren: () => import('./pages/seller/item-edit/item-edit.module').then( m => m.ItemEditPageModule)
  },
  {
    path: 'shop-register-main',
    loadChildren: () => import('./pages/shop-register/shop-register-main/shop-register-main.module').then( m => m.ShopRegisterMainPageModule)
  },
  {
    path: 'shop-register-splash-screen',
    loadChildren: () => import('./pages/shop-register/shop-register-splash-screen/shop-register-splash-screen.module').then( m => m.ShopRegisterSplashScreenPageModule)
  },
  {
    path: 'product-category-sort',
    loadChildren: () => import('./modals/product-category-sort/product-category-sort.module').then( m => m.ProductCategorySortPageModule)
  },
  {
    path: 'product-category-filter',
    loadChildren: () => import('./modals/product-category-filter/product-category-filter.module').then( m => m.ProductCategoryFilterPageModule)
  },
  {
    path: 'profile-extract-money',
    loadChildren: () => import('./modals/profile-extract-money/profile-extract-money.module').then( m => m.ProfileExtractMoneyPageModule)
  },
  {
    path: 'seller/shop-category',
    loadChildren: () => import('./pages/seller/home/shop-category/shop-category.module').then( m => m.ShopCategoryPageModule)
  },
  {
    path: 'seller/shop-category-two',
    loadChildren: () => import('./pages/seller/home/shop-category-two/shop-category-two.module').then( m => m.ShopCategoryTwoPageModule)
  },
  {
    path: 'seller/item-delete',
    loadChildren: () => import('./pages/seller/item-delete/item-delete.module').then( m => m.ItemDeletePageModule)
  },
  // {
  //   path: 'sjkdsf',
  //   loadChildren: () => import('./sjkdsf/sjkdsf.module').then( m => m.SjkdsfPageModule)
  // },
  {
    path: 'product',
    loadChildren: () => import('./pages/buyer/home/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'category-page',
    loadChildren: () => import('./pages/buyer/home/category-page/category-page.module').then( m => m.CategoryPagePageModule)
  },
  {
    path: 'chatroom-page',
    loadChildren: () => import('./pages/buyer/chatroom-page/chatroom-page.module').then( m => m.ChatroomPagePageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}




