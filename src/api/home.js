import {requests} from "@/api/request";



export function getHomeMultidata() {
  return requests.get("/home/multidata")
}

export function getHomeGoods(type, page=1) {
  return requests.get("/home/data", {
    type, page
  })
}
