import './App.css'
import Greeting from './Greeting'
import TaskList from './TaskList'
import ActionButton from './ActionButton'
import ProfileCard from './ProfileCard'
import ImageGallery from './ImageGallery'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Мои задачи по React</h1>

      <section style={{ marginBottom: '24px' }}>
        <h3>1. Приветствие</h3>
        <Greeting />
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h3>2. Список задач</h3>
        <TaskList />
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h3>3. Кнопка</h3>
        <ActionButton />
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h3>4. Карточка профиля</h3>
        <ProfileCard />
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h3>5. Галерея</h3>
        <ImageGallery />
      </section>
    </div>
  )
}

export default App