const HorizontalLogo = () => {
    return (
        <div className="flex items-center space-x-4 w-full">
            <img src="/logo.svg" alt="Logo" className="h-16" />
            <div style={{ display: 'flex' }}>
                <p className={`m-0 max-w-[3ch] text-4xl`}>
                    PRE
                </p>
                <p className={`m-0 max-w-[12ch] text-4xl text-primary`}>
                    STARS
                </p>
            </div>
        </div>
    );
};

export default HorizontalLogo;