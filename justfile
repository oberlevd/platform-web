NPM_INSTALL := "npm install --global"

# help
default:
    @just --list

# помощь
help:
    @just --list

# установка dev-зависимостей
install:
    @echo "📦 Установка зависимостей npm..."
    {{NPM_INSTALL}} pnpm
    {{NPM_INSTALL}} commitizen
    {{NPM_INSTALL}} standard-version

# Патч-релиз
release-patch:
    npx standard-version --release-as patch

# Минорный релиз
release-minor:
    npx standard-version --release-as minor

# Мажорный релиз
release-major:
    npx standard-version --release-as major

# Публикация релиза
publish:
    git push --follow-tags origin main
