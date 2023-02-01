<style>
    .flex {
        display: flex
    }
    .items-center{
        align-items:center
    }
    .w-100 {
        width: 100%
    }
    .br-5 {
        border-radius: 5px
    }
</style>

### **Review Suggestions**

#### Ensure that the PR is meeting the following conditions

1. Implementation is good (or can be improved).
2. Check for best practices.
3. Variable names are standard and meaningful
4. Logics for the new updates shouldn't break existing flow
5. Updates on any common codes should be compatible with existing implementation
6. There shouldn't be any typos
7. Logics should be as simplified as possible

---

<form>

### **Pull Request Checks**

<div class="flex items-center">
    <input required type="checkbox" name="Dev" value="dev-tested"/>
    <label>Developer Tested</label>
</div>
<div class="flex items-center">
    <input required type="checkbox" name="Dev" value="dev-tested"/>
    <label>QA Completed</label>
</div>
<div class="flex items-center">
    <input required type="checkbox" name="Dev" value="dev-tested"/>
    <label>Backward Compatibility Tested (Dev)</label>
</div>
<div class="flex items-center">
    <input required type="checkbox" name="Dev" value="dev-tested"/>
    <label>Backward Compatibility Tested (QA)</label>
</div>
<div class="flex items-center">
    <input required type="checkbox" name="Dev" value="dev-tested"/>
    <label>PR Revert Compatibility Tested (Dev)</label>
</div>
<br/>

---

### **Developer Test Cases**

#### The Developer who created the Pull Request should fill the following details

##### All required fields have a \*

<br>
<div>
<label>Basic cases *</label><br>
<textarea rows=5 required class="w-100 br-5"></textarea>

<label>Edge cases \*</label><br>
<textarea rows=5 required class="w-100 br-5"></textarea>

<label>Sanity cases on surrounding elements</label><br>
<textarea rows=5 class="w-100 br-5"></textarea>

</div>
<br/>

---

### **QA Test Cases**

#### The SDET responsible for QA should fill the following

##### All required fields have a \*

<div>
<label>Basic cases *</label><br>
<textarea rows=5 required class="w-100 br-5"></textarea>

<label>Edge cases \*</label><br>
<textarea rows=5 required class="w-100 br-5"></textarea>

<label>Sanity cases on surrounding elements</label><br>
<textarea rows=5 class="w-100 br-5"></textarea>

</div>

</form>
