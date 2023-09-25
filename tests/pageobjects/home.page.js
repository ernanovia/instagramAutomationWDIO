
const waitHelper = require('../../helpers/waitHelper');

class HomePage {
    get menuSearch(){
        // return $('~com.instagram.android:id/search_tab')
        return $('xpath://android.widget.FrameLayout[@content-desc="Search and explore"]')
    }

    get fieldSearch(){
        // return $('~com.instagram.android:id/action_bar_search_edit_text')
        return $('xpath:/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.EditText')
    }

    get clickFirstUser(){
        return $('xpath:/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.LinearLayout')
    }

    get buttonFollow(){
        // return $('~com.instagram.android:id/profile_header_follow_button')
        return $('xpath://android.widget.Button[@content-desc="Follow Selena Gomez"]')
    }

    get textFollowing(){
        // return $(`android=new UiSelector().text("Following")`);
        return $('xpath://android.widget.Button[@content-desc="Following Selena Gomez"]')
    }

    get buttonMessage(){
        // return $('~com.instagram.android:id/profile_header_follow_button')
        // return $('accessibility_id :Message')
        return $('xpath://android.widget.Button[@content-desc="Message"]')
    }
    get inputMessage(){
        // return $('~com.instagram.android:id/row_thread_composer_edittext')
        return $('xpath:/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[3]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText')
    }
    get clickSendMessage(){
        return $(`android=new UiSelector().text("Send")`);
        // return $('~com.instagram.android:id/row_thread_composer_button_send')
        // return $('accessibility_id :Message')
        // return $('xpath:/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[3]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView')
    }


    // get (){
    //     return $('~com.instagram.android:id/action_bar_search_edit_text')
    // }

    // get (){
    //     return $('~com.instagram.android:id/action_bar_search_edit_text')
    // }

    // get (){
    //     return $('~com.instagram.android:id/action_bar_search_edit_text')
    // }

    // get menuKalkulatorZakat(){
    //     return $('xpath://android.widget.ImageView[@content-desc="Kalkulator Zakat"]')
    // }

    async clickSearchUser(){
        await waitHelper.waitAndClick(this.menuSearch);
    }

    async inputusername(string){
        await waitHelper.waitAndClick(this.fieldSearch);
        await this.fieldSearch.setValue(string);
        await waitHelper.waitAndClick(this.clickFirstUser);
    }

    async clickFollowhUser(){
        await waitHelper.waitAndClick(this.buttonFollow);
    }

    async getFollowingText(){
        return this.textFollowing.getAttribute('content-desc');
    }

    async sendMessage(string){
        await waitHelper.waitAndClick(this.buttonMessage);
        await waitHelper.waitAndClick(this.inputMessage);
        await this.inputMessage.setValue(string);
        await waitHelper.waitAndClick(this.clickSendMessage);

    }

    // async openZakatPage(){
    //     await waitHelper.waitAndClick(this.buttonOthers);
    //     await waitHelper.waitAndClick(this.menuKalkulatorZakat);
    // }

}

module.exports = new HomePage()
