import { request } from './request'

export function getDetail (iid) {
  return request({
    url: '/detail',
    params: {
      iid: iid
    }
  })
}

export class Goods {
  constructor(itemInfo, colums, services) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.services = services;
    this.colums = colums;
    if (this.colums.length > 2) {
      this.colums[2] = this.services[this.services.length - 1].name
    }
  }
}


