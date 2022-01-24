import { useRouter } from "next/router"

export default function PostID() {

const router = useRouter()

console.log(router.query.postId)

return <h1>Here is a post by ID: {router.query.postId}</h1>
}