<template>
    <div class="home">
        <b-container>
            <b-jumbotron header="Instant activation" bg-variant="light">
                <p>
                    Free hosting accounts are activated instantly, no need to wait for manual approval, you can start building your pages immediately! A powerful Vista Panel control panel is provided to manage your website, packed with hundreds of great features including Email, FTP add-on domain
                    ...
                </p>
                <b-button variant="outline-primary" href="/signup">{{ $t('user.signup_for_free') }}</b-button>
            </b-jumbotron>
        </b-container>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <h2>Automated features!</h2>
                    <p><img src="@/assets/images/img6.jpg" alt="server" class="rounded" /></p>
                    <p>
                        We provide free FTP, PHP 5.3, MySQL and our very popular feature: The Automatic Script Installer Fantastico can install many popular scripts such as PHPbb2 and PHPbb3, Wordpress, Zen-Cart, osCommerce, MyBB, UseBB, MyLittle Forum, 4images, Coppermine, SMF, Joomla, e107, XOOPS,
                        PHP Wind, CuteNews, Mambo, WikiWig and many more! No need to wait a long time uploading files, Our Automatic Script Installer deploys your files in seconds!.
                    </p>
                </b-col>
                <b-col>
                    <h2>Quotas and forum</h2>
                    <p><img src="@/assets/images/img5.jpg" alt="server" class="rounded" /></p>
                    <p>
                        Combined with our high bandwidth, space provisions and excellent sub-domain options, make us the optimal option. Our very popular Community Forums has been taken up excellently and active members are growing steadily, hence resulting in a better hosting and friendly
                        experience..
                    </p>
                    <h3>Cluster servers</h3>
                    <p>We are using a powerful cluster of webservers that are all interconnected to act as one giant super computer.</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {}
}
</script>
<style scoped lang="less"></style>
