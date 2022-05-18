import routes from 'router/routes'

const navigation = () => {
  return routes.reduce((prev: any, curr) => {
    const { meta, path, name } = curr
    if (meta.icon) {
      prev.push({ name, href: path, icon: meta.icon, title: meta.title })
    }
    return prev
  }, [])
}

export default navigation()
