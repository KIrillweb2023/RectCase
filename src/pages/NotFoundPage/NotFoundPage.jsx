import "./NotFoundPage.scss"

export const NotFoundPage = () => {
    return (
        <div className="notPage">
            <div className="notPage__wrapper">
                <h4 className="notPage__title">
                    404
                </h4>
                <p className="notPage__subtitle">Not Found page</p>
                <p className="notPage__descr">Возникла ошибка, такой страницы не существует!</p>
            </div>
        </div>
    )
}