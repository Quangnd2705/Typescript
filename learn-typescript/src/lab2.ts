//1. Tạo type product
enum Rate {
  low = 'Thấp',
  medium = 'Trung bình',
  hight = 'Cao'
}

type Product = {
  name: string
  price: number
  sale: boolean
  rate: Rate
}

//2. Tạo mảng listproduct
let listProducts: Product[] = [
  { name: 'Sản phẩm A', price: 4, sale: true, rate: Rate.low },
  { name: 'Sản phẩm B', price: 6, sale: false, rate: Rate.medium },
  { name: 'Sản phẩm C', price: 10, sale: true, rate: Rate.hight },
  { name: 'Sản phẩm D', price: 5, sale: true, rate: Rate.medium },
  { name: 'Sản phẩm E', price: 8, sale: false, rate: Rate.hight }
]

//3. Viết thêm hàm mới
const addDescription = () => {
  listProducts = listProducts.map(product => ({
    ...product,
    description: product.price > 5 ? 'Tốt' : 'Bình thường'
  }))
}

addDescription()

//4. Viết hàm hiển thị danh sách
const displayProducts = () => {
  listProducts.forEach(product => {
    console.log(
      `Tên: ${product.name} | ` +
      `Giá: ${product.price} | ` +
      `Sale: ${product.sale ? 'Có' : 'Không'} | ` +
      `Đánh giá: ${product.rate}`
    )
  })
}

displayProducts()

//5. Viết hàm tính tổng
const totalPrice = () => {
  return listProducts.reduce((total, product) => total + product.price, 0)
}

console.log('Tổng giá bán:', totalPrice())

//6. Viết hàm lọc những sản phẩm đang Sale và đánh giá từ Trung bình trở lên
const filterSaleAndGoodRate = () => {
  return listProducts.filter(
    product =>
      product.sale === true &&
      (product.rate === Rate.medium || product.rate === Rate.hight)
  )
}

console.log('Sản phẩm sale & đánh giá >= Trung bình:', filterSaleAndGoodRate())
