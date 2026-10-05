function ImageGallery() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <img src="https://placehold.co/200x200?text=Город+1" alt="Город 1" style={{ width: '200px', height: '200px' }} />
      <img src="https://placehold.co/200x200?text=Город+2" alt="Город 2" style={{ width: '200px', height: '200px' }} />
      <img src="https://placehold.co/200x200?text=Город+3" alt="Город 3" style={{ width: '200px', height: '200px' }} />
    </div>
  )
}
export default ImageGallery