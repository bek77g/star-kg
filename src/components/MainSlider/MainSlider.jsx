import React from 'react';
import Flickity from 'react-flickity-component';

const flickityOptions = {
  initialIndex: 2,
};

const MainSlider = () => {
  return (
    <div className='star-slide content'>
      <Flickity
        className={'star js-flickity'}
        elementType={'div'}
        options={flickityOptions}
        reloadOnUpdate>
        <div className='star-cell'>
          <div className='star-img'>
            <img
              src='https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg'
              alt=''
              className='star-photo'
            />
          </div>
          <div className='star-content'>
            <div className='star-title'>BIG MAGIC</div>
            <div className='star-author'>by Elizabeth Gilbert</div>
            <div className='rate'>
              <fieldset className='rating'>
                <input
                  type='checkbox'
                  id='star5'
                  name='rating'
                  defaultValue={5}
                />
                <label className='full' htmlFor='star5' />
                <input
                  type='checkbox'
                  id='star4'
                  name='rating'
                  defaultValue={4}
                />
                <label className='full' htmlFor='star4' />
                <input
                  type='checkbox'
                  id='star3'
                  name='rating'
                  defaultValue={3}
                />
                <label className='full' htmlFor='star3' />
                <input
                  type='checkbox'
                  id='star2'
                  name='rating'
                  defaultValue={2}
                />
                <label className='full' htmlFor='star2' />
                <input
                  type='checkbox'
                  id='star1'
                  name='rating'
                  defaultValue={1}
                />
                <label className='full' htmlFor='star1' />
              </fieldset>
              <span className='star-voters'>1.987 voters</span>
            </div>
            <div className='star-sum'>
              Readers of all ages and walks of life have drawn inspiration and
              empowerment from Elizabeth Gilbert’s stars for years.{' '}
            </div>
            <div className='star-see'>See The star</div>
          </div>
        </div>
        <div className='star-cell'>
          <div className='star-img'>
            <img
              src='https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg'
              alt=''
              className='star-photo'
            />
          </div>
          <div className='star-content'>
            <div className='star-title'>Ten Thousand Skies Above You</div>
            <div className='star-author'>by Claudia Gray</div>
            <div className='rate'>
              <fieldset className='rating blue'>
                <input
                  type='checkbox'
                  id='star6'
                  name='rating'
                  defaultValue={5}
                />
                <label className='full1' htmlFor='star6' />
                <input
                  type='checkbox'
                  id='star7'
                  name='rating'
                  defaultValue={4}
                />
                <label className='full1' htmlFor='star7' />
                <input
                  type='checkbox'
                  id='star8'
                  name='rating'
                  defaultValue={3}
                />
                <label className='full1' htmlFor='star8' />
                <input
                  type='checkbox'
                  id='star9'
                  name='rating'
                  defaultValue={2}
                />
                <label className='full1' htmlFor='star9' />
                <input
                  type='checkbox'
                  id='star10'
                  name='rating'
                  defaultValue={1}
                />
                <label className='full1' htmlFor='star10' />
              </fieldset>
              <span className='star-voters'>1.987 voters</span>
            </div>
            <div className='star-sum'>
              The hunt for each splinter of Paul's soul sends Marguerite racing
              through a war-torn San Francisco.
            </div>
            <div className='star-see star-blue'>See The star</div>
          </div>
        </div>
        <div className='star-cell'>
          <div className='star-img'>
            <img
              src='https://www.abestars.com/blog/wp-content/uploads/2016/08/10.jpg'
              alt=''
              className='star-photo'
            />
          </div>
          <div className='star-content'>
            <div className='star-title'>A Tale For The Time Being</div>
            <div className='star-author'>by Ruth Ozeki</div>
            <div className='rate'>
              <fieldset className='rating purple'>
                <input
                  type='checkbox'
                  id='star11'
                  name='rating'
                  defaultValue={5}
                />
                <label className='full' htmlFor='star11' />
                <input
                  type='checkbox'
                  id='star12'
                  name='rating'
                  defaultValue={4}
                />
                <label className='full' htmlFor='star12' />
                <input
                  type='checkbox'
                  id='star13'
                  name='rating'
                  defaultValue={3}
                />
                <label className='full' htmlFor='star13' />
                <input
                  type='checkbox'
                  id='star14'
                  name='rating'
                  defaultValue={2}
                />
                <label className='full' htmlFor='star14' />
                <input
                  type='checkbox'
                  id='star15'
                  name='rating'
                  defaultValue={1}
                />
                <label className='full' htmlFor='star15' />
              </fieldset>
              <span className='star-voters'>1.987 voters</span>
            </div>
            <div className='star-sum'>
              In Tokyo, sixteen-year-old Nao has decided there’s only one escape
              from her aching loneliness and her classmates’ bullying.
            </div>
            <div className='star-see star-pink'>See The star</div>
          </div>
        </div>
        <div className='star-cell'>
          <div className='star-img'>
            <img
              src='https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg'
              alt=''
              className='star-photo'
            />
          </div>
          <div className='star-content'>
            <div className='star-title'>The Great Gatsby</div>
            <div className='star-author'>by F.Scott Fitzgerald</div>
            <div className='rate'>
              <fieldset className='rating yellow'>
                <input
                  type='checkbox'
                  id='star16'
                  name='rating'
                  defaultValue={5}
                />
                <label className='full' htmlFor='star16' />
                <input
                  type='checkbox'
                  id='star17'
                  name='rating'
                  defaultValue={4}
                />
                <label className='full' htmlFor='star17' />
                <input
                  type='checkbox'
                  id='star18'
                  name='rating'
                  defaultValue={3}
                />
                <label className='full' htmlFor='star18' />
                <input
                  type='checkbox'
                  id='star19'
                  name='rating'
                  defaultValue={2}
                />
                <label className='full' htmlFor='star19' />
                <input
                  type='checkbox'
                  id='star20'
                  name='rating'
                  defaultValue={1}
                />
                <label className='full' htmlFor='star20' />
              </fieldset>
              <span className='star-voters'>1.987 voters</span>
            </div>
            <div className='star-sum'>
              The Great Gatsby, F. Scott Fitzgerald’s third star, stands as the
              supreme achievement of his career.
            </div>
            <div className='star-see star-yellow'>See The star</div>
          </div>
        </div>
        <div className='star-cell'>
          <div className='star-img'>
            <img
              src='https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg'
              alt=''
              className='star-photo'
            />
          </div>
          <div className='star-content'>
            <div className='star-title'>After You</div>
            <div className='star-author'>by Jojo Moyes</div>
            <div className='rate'>
              <fieldset className='rating dark-purp'>
                <input
                  type='checkbox'
                  id='star21'
                  name='rating'
                  defaultValue={5}
                />
                <label className='full' htmlFor='star21' />
                <input
                  type='checkbox'
                  id='star22'
                  name='rating'
                  defaultValue={4}
                />
                <label className='full' htmlFor='star22' />
                <input
                  type='checkbox'
                  id='star23'
                  name='rating'
                  defaultValue={3}
                />
                <label className='full' htmlFor='star23' />
                <input
                  type='checkbox'
                  id='star24'
                  name='rating'
                  defaultValue={2}
                />
                <label className='full' htmlFor='star24' />
                <input
                  type='checkbox'
                  id='star25'
                  name='rating'
                  defaultValue={1}
                />
                <label className='full' htmlFor='star25' />
              </fieldset>
              <span className='star-voters'>1.987 voters</span>
            </div>
            <div className='star-sum'>
              Louisa Clark is no longer just an ordinary girl living an ordinary
              life. After the transformative six months spent.
            </div>
            <div className='star-see star-purple'>See The star</div>
          </div>
        </div>
      </Flickity>
    </div>
  );
};

export default MainSlider;
